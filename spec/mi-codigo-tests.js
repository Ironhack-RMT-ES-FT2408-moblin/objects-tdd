describe("function convertirCentsToEuros", function() {
  // describe define la seccion de pruebas sobre una funcion

  it("test1. Deberia convertir centimos a euros", function() {
    // it define cada segmento de pruebas de esa funcion

    expect(convertirCentsToEuros(100)).toBe(1)
    // define cada test que estamos probando
    expect(convertirCentsToEuros(3000)).toBe(30)
    expect(convertirCentsToEuros(-20)).toBe(-0.2)
    expect(convertirCentsToEuros(0)).toBe(0)
  })

  it("test2. Si el primer argumento no es un numero, deberia retornar undefined", function() {
    expect(convertirCentsToEuros("patata")).toBeUndefined()
  })

  it("test3. Sin los centimos no son recibimos, deberia retornar 0", function() {
    expect(convertirCentsToEuros()).toBe(0)
  })

})