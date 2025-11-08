class Cuenta {
    #saldo; 

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }

    depositar(monto) { 
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`Depósito: +$${monto.toFixed(2)}. Saldo actual: $${this.#saldo.toFixed(2)}`);
        } else {
            console.log(`El monto debe ser positivo.`);
        }
    }

    retirar(monto) { 
        if (monto > 0 && this.#saldo >= monto) {
            this.#saldo -= monto;
            console.log(`Retiro: -$${monto.toFixed(2)}. Saldo actual: $${this.#saldo.toFixed(2)}`);
            return true;
        } else {
            console.log(`Saldo insuficiente o monto inválido. Saldo actual: $${this.#saldo.toFixed(2)}`);
            return false;
        }
    }

    get saldo() {
        return this.#saldo;
    }
    transferir(cuentaDestino, monto) {
        if (this.retirar(monto)) { 
            cuentaDestino.depositar(monto);
            console.log(`Transferencia exitosa: $${monto.toFixed(2)} transferidos.`);
        } else {
            console.log(`Transferencia fallida.`);
        }
    }
}
class CuentaAhorro extends Cuenta {
    retirar(monto) { 
        if (monto > 0 && this.saldo >= monto) { 
            return super.retirar(monto);
        } else {
            console.log(`No se permite el sobregiro. Saldo actual: $${this.saldo.toFixed(2)}`);
            return false;
        }
    }
}
class CuentaCorriente extends Cuenta {
    static LIMITE_SOBREGIRO = -200;
    retirar(monto) {
        if (monto > 0) {
            const saldoTrasRetiro = this.saldo - monto;
            if (saldoTrasRetiro >= CuentaCorriente.LIMITE_SOBREGIRO) {
               
                if (saldoTrasRetiro >= 0) {
                    return super.retirar(monto); 
                } else {
                    console.log(`Retiro (Sobregiro): -$${monto.toFixed(2)}. Saldo actual: $${this.saldo.toFixed(2)}`);
                    return true;
                }
            } else {
                console.log(`Límite de sobregiro excedido (Límite: $${CuentaCorriente.LIMITE_SOBREGIRO}). Saldo actual: $${this.saldo.toFixed(2)}`);
                return false;
            }
        }
        return false;
    }
    setSaldo(nuevoSaldo) { 
        this._private_saldo = nuevoSaldo; 
    }
    get saldo() {
        return this._private_saldo !== undefined ? this._private_saldo : super.saldo;
    }
}
