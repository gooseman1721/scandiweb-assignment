function attributeSortingFunction(a, b) {
  const attributeTypeA = a.type;
  const attributeTypeB = b.type;
  return attributeTypeA < attributeTypeB
    ? 1
    : attributeTypeA > attributeTypeB
    ? -1
    : 0;
}

export { attributeSortingFunction };
