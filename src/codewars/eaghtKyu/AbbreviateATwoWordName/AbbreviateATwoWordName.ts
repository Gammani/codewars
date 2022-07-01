export function abbrevName(name: string): string {
    let separate = name.split(" ");
    let abbrev = (separate[0].charAt(0) + "." + separate[1].charAt(0)).toUpperCase();
    return abbrev;
}