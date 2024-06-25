beforeAll(() => {
  // JS DOM does not support the dialog element, so we need to mock it
  HTMLDialogElement.prototype.show = jest.fn(function mock(
  ) {
    this.open = true;
  });

  HTMLDialogElement.prototype.showModal = jest.fn(function mock() {
    this.open = true;
  });

  HTMLDialogElement.prototype.close = jest.fn(function mock() {
    this.open = false;
  });
});
