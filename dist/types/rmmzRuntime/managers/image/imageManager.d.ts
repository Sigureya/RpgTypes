export interface Rmmz_ImageManager<Bitmap = unknown> {
    loadAnimation(filename: string, hue: number): Bitmap;
    loadBattleback1(filename: string, hue: number): Bitmap;
    loadBattleback2(filename: string, hue: number): Bitmap;
    loadEnemy(filename: string, hue: number): Bitmap;
    loadFace(filename: string): Bitmap;
    loadTileset(filename: string): Bitmap;
}
