import { MenuSection } from "@_types/menu";
import { Query } from "./Query";

export class Menu {
  static async fetch() {
    const query = "SELECT * FROM store.fetch_menu()";
    return (await Query.exec(query)).rows as MenuSection[];
  }
}
