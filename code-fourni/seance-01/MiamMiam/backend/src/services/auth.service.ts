import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "../models/auth.model";
import { ERole, User } from "../models/user.model";
import { generateToken, verifyToken } from "../utils/auth";
import { LoggerService } from "./logger.service";
import { UsersService } from "./users.service";
import bcrypt from "bcrypt";

export class AuthService {
  /**
   * Vérifie les identifiants.
   * @returns un token si l'email et le mot de passe sont corrects, undefined sinon
   */
  static async login(email: string, password: string): Promise<string | undefined> {
    const user = UsersService.getByEmail(email);
    if (!user) return undefined; // Utilisateur non trouvé
    const isMatch = await bcrypt.compare(password, user.password); // TODO
    if (!isMatch) return undefined; // Mot de passe incorrect
    return generateToken({
      id : user.id,
      email : user.email,
      role : user.role
    });
  }

  /**
   * Middleware : vérifie le token du header Authorization et place l'utilisateur dans req.user.
   * Répond 401 si le token est absent ou invalide.
   */
  static authorize(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.get("Authorization");
    if (!token) {
      LoggerService.error("Missing Authorization header");
      return res.sendStatus(401);
    }

    const payload = verifyToken(token);
    if (!payload) return res.sendStatus(401);

    req.user = payload; // disponible dans les middlewares et routes suivants
    return next();
  }

  /**
   * Middleware (à placer après authorize) : n'autorise que les administrateurs.
   * Répond 403 sinon.
   */
  static isAdmin({ user }: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (!user) return res.sendStatus(401);
    if (user.role !== ERole.ADMIN) return res.sendStatus(403);
    return next();
  }
}
