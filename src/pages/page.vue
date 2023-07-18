<template>
  <div>
    <k-grid :data-items="gridData" :columns="gridColumns">
      <template v-slot:ageTemp="{ props }">
        <td>{{ props.dataItem.age + 29 }}</td>
      </template>
    </k-grid>
  </div>
</template>

<script>
export default {
  layout: "mitest-layout",
  name: "demo-table",
  //

  data() {
    return {
      gridData: [
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Smith", age: 25 },
        { id: 3, name: "Bob Johnson", age: 40 },
      ],
      gridColumns: [
        { field: "id", title: "ID" },
        { field: "id", cell: "ageTemp", title: "Age" },
        { field: "name", title: "Name" },
      ],
    };
  },
};
</script>
