import { FilesService } from "./files.service";
import { LoggerService } from "./logger.service";

/**
 * Service de base : lecture/écriture du fichier JSON d'une ressource,
 * avec conversion DBO <-> objet métier via un mapper.
 */
export abstract class AbstractService {
  protected static dbPath: string = "";

  protected static readDB<FileT, OutT>(mapper: (item: FileT) => OutT): OutT[] {
    let dbos: FileT[] = [];
    try {
      dbos = FilesService.readFile<FileT>(this.dbPath);
    } catch (error) {
      LoggerService.error(error);
      return [];
    }
    //const items = dbos.map(dbo => mapper(dbo));
    return dbos.map(mapper);
  }

  protected static writeDB<From, ToWrite>(items: From[], mapper: (item: From) => ToWrite): boolean {
    const dbos = items.map(mapper);
    try {
      FilesService.writeFile<ToWrite>(this.dbPath, dbos);
    } catch (error) {
      LoggerService.error(error);
      return false;
    }
    return true;
  }

  /** Prochain id disponible (les ids commencent à 1) */
  protected static getNextId(items: { id: number }[]): number {
    return Math.max(0, ...items.map(item => item.id)) + 1;
  }
}
