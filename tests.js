require('./lib/boletex');

linha_digitavel = "10491.60433 31000.908553 55319.998500 1 67570000126490";
new_data_vencimento = "09/04/2016";

console.log(boletex.reboleta(linha_digitavel, new_data_vencimento));