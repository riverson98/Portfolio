export class StringUtils {
    
    public static isNullOrEmpty(value: string | null | undefined): boolean {
      return !value || value.trim().length === 0;
    }
  }