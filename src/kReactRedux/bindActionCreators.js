export function bindActionCreators(creators, dispatch) {
  let actions = {};
  for (let key in creators) {
    actions[key] = bindActionCreator(creators[key], dispatch);
  }
  return actions
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}