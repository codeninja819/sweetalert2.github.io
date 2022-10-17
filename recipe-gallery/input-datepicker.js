window.showExample = () => {
let datepicker

Swal.fire({
  title: 'Please enter departure date',
  input: 'text',
  inputValue: new Date().toISOString(),
  stopKeydownPropagation: false,
  preConfirm: () => {
    if (datepicker.getDate() < new Date(new Date().setHours(0,0,0,0))) {
      Swal.showValidationMessage(`The departure date can't be in the past`)
    }
    return datepicker.getDate()
  },
  didOpen: () => {
    datepicker = new Pikaday( {field: Swal.getInput() });
    setTimeout(() => datepicker.show(), 400); // show calendar after showing animation
  }
}).then((result) => {
  console.log(result.value)
})
}
