export function removeObjectFromArray(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

export function insertobjectInArray(array, item, index) {
  let newArray = array.slice()
  newArray.splice(index, 0, item)
  return newArray
}

export function updateObjectInArray(array, updateItem, updateItemIndex) {
  return array.map((item, index) => {
    if (index !== updateItemIndex) {
      // This isn't the item we care about - keep it as-is
      return item
    }
    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...updateItem
    }
  })
}

export function updateObjectInArrays(data, object, objectId) {
  //toupdate
  return Object.assign(
    data.find(({ ProductID }) => ProductID === objectId),
    object
  );
}
