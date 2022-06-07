const randString = (length, current) => {
  current = current ? current : '';
  return length ? randString(--length, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 60)) + current) : current;
}

export default randString