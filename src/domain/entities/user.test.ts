import { Property } from "./property";
import { User } from "./user";
describe("User Entity", () => {
  it("deve criar uma instância de User com o ID e Nome", () => {
    const user = new User("1", "João Silva");
    expect(user.getId()).toBe("1");
    expect(user.getName()).toBe("João Silva");
  });

  it("deve lançar um erro se o nome for vazio", () => {
    expect(() => new User("1", "")).toThrow("O nome é obrigatório");
  });

  it("deve lançar um erro se o id for vazio", () => {
    expect(() => new User("", "João")).toThrow("O id é obrigatório");
  });

  it("deve validar o número máximo de hóspedes", () => {
    const property = new Property("1", "Casa de campo", "Descrição", 5, 150);
  });
});
