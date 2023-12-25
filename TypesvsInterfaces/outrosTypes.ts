/* OUTROS TIPOS */
// primitive
type Nome = string;

// object
type PontoX = { x: number; };
type PontoY = { y: number; };

// union -- uniao/intersecção
type Pontos = PontoX | PontoY;

// tuple -- tupla
type Data = [number, string];