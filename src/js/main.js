export default function destructingOblect({ special }) {
  const result = special.map(({
    id, name, icon, description = 'Описание недоступно',
  }) => ({
    id, name, icon, description,
  }));

  return result;
}
