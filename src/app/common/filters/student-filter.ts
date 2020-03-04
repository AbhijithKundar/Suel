export let filterJson = [
  {
    name: "Student Name",
    clm: "student_name",
    type: 'text',
    parent: [],
    selectedData: [
      {
        clm:"student_name",
        val:"Ajith veksih",
        name:"Student name"
      },
      {
        clm:"student_name",
        val:"Ajith",
        name:"Student name"
      }
    ]
  },
  {
    name: "Start Date",
    clm: "start_date",
    type: 'date',
    parent: [],
    selectedData: [
      
    ]
  },
  {
    name: "End Date",
    clm: "end_date",
    type: 'date',
    parent: ['start_date'],
    selectedData: []
  },
  {
    name: "Route",
    clm: "route_id",
    type: 'autocomplete',
    parent: ['start_date', 'end_date'],
    selectedData: []
  },
  {
    name: "Bus",
    clm: "bus_id",
    type: 'autocomplete',
    parent: ['route_id'],
    selectedData: []
  },
  {
    name: "Bus Stop",
    clm: "stop_id",
    type: 'autocomplete',
    parent: ['bus_id'],
    selectedData: []
  }
];