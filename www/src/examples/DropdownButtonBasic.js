const BUTTONS = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Danger'
];

function renderDropdownButton(title, i) {
  return (
    <DropdownButton
      drop="left"
      variant={title.toLowerCase()}
      title={title}
      key={i}
      id={`dropdown-basic-${i}`}
    >
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>
        Active Item
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  );
}

const buttonsInstance = (
  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
);

render(buttonsInstance);
