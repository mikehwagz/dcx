export default function dcx(node) {
  return function cx(...cns) {
    cns
      .reduce(
        (arr, val) =>
          arr.concat(
            typeof val === 'object' ? Object.entries(val) : [[val, true]],
          ),
        [],
      )
      .map((def) =>
        def[0].split(' ').map((cn) => node.classList.toggle(cn, def[1])),
      )
  }
}
