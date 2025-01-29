interface Animal {
    nome: string;
    tipo: 'Terrestre' | 'Aquatico';
    domestico: boolean;
}

interface Pets extends Animal{
    dono: string;
}

let cachorro: Pets = {
    nome: 'Rex',
    tipo: 'Terrestre',
    domestico: true,
    dono: 'Jao',
}