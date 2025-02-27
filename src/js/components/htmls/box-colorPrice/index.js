export const htmlColorPrice = (val, index) => {
  return ` 
      <li key="${index}">
        <input type="checkbox" 
          name="${val.name}" 
          class="${val.class}" 
          value="${val.value}"
          ${val.checked}
        />
        <label for="${val.for}">${val.name}</label>
      </li>
  `;
};
