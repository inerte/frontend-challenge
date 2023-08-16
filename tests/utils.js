export function random(symbols = false) {
  const possible_characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const possible_symbols = "/?@+-";

  let random_character;
  let random_symbol;

  let random_string = "";

  for (let i = 0; i < 32; i++) {
    random_character = Math.floor(
      Math.random() * possible_characters.length + 1,
    );
    random_string += possible_characters.charAt(random_character);

    if (symbols === true) {
      random_symbol = Math.floor(Math.random() * possible_symbols.length + 1);
      random_string += random_symbol;
    }
  }

  return random_string;
}
