const csv = ["Case Name" + ',' +  "Date Filed" + ',' + "Date Terminated" + ',' + "Court" + ',' + "Attorney" + ',' + "Assigned To"]
for (let page = 1; page <= 10; page++) {
  const getData = async () => {
    const response = await fetch(`https://www.courtlistener.com/api/rest/v3/search/?format=json&page=${page}&nature_of_suit=446&type=d`);
    const myJson = await response.json();
    myJson.results.map(it => {
      csv.push(it.caseName + ',' + it.dateFiled + ',' + it.dateTerminated + ',' + it.court + ',' + it.attorney + ',' + it.assignedTo)
    })
    console.log(csv.join('\n'))
  }
  getData()
}