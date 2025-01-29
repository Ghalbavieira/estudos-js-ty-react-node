interface Especificacao {
    marca: string;
    modelo: string;
    armazenamento: string;
    [extra: string]: string | number | boolean;
}

let computador: Especificacao = {
    marca: 'Dell',
    modelo: 'adfadsfsdf',
    armazenamento: 'asfdsf',
    bluethoot: true,
}
