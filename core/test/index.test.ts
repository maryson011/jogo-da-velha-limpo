import { somar } from "@/index";

test('Deve somar dois números', () => {
    const resultado = somar(3,3)
    expect(resultado).toBe(6)
})