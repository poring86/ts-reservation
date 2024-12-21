import { DateRange } from "./date_range";

describe("DateRange Value Object", () => {
  it("Deve lançar um erro se a data de término  for antes da data de início", () => {
    expect(() => {
      new DateRange(new Date("2024-12-25"), new Date("2024-12-20"));
    }).toThrow("A data de término deve ser posterior a data de início");
  });
  it("Deve criar uma instância de DateRange com a data de início e data de término , verificar o retorno", () => {
    const startDate = new Date("2024-12-20");
    const endDate = new Date("2024-12-25");
    const dateRange = new DateRange(startDate, endDate);
    expect(dateRange.getStartDate()).toEqual(startDate);
    expect(dateRange.getEndDate()).toEqual(endDate);
  });

  it("Deve calcular o total de noites corretamente", () => {
    const startDate = new Date("2024-12-20");
    const endDate = new Date("2024-12-25");
    const dateRange = new DateRange(startDate, endDate);

    const totalNights = dateRange.getTotalNights();

    expect(totalNights).toBe(5);
  });

  it("Deve verificar se dois intervalos de datas se sobrepõem", () => {
    const dateRage1 = new DateRange(
      new Date("2024-12-20"),
      new Date("2024-12-25")
    );
    const dateRage2 = new DateRange(
      new Date("2024-12-22"),
      new Date("2024-12-27")
    );

    const overlaps = dateRage1.overlaps(dateRage2);

    expect(overlaps).toBe(true);
  });

  it("Deve lançar erro se a data de início for igual a do final", () => {
    expect(() => {
      new DateRange(new Date("2024-12-25"), new Date("2024-12-25"));
    }).toThrow("A data de início e término não podem ser iguais");
  });
});
