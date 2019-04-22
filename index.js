// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(d => d.name);
}

function exactMatch(drivers, keyword) {
  return drivers.filter(drivers => drivers[Object.keys(keyword)[0]] === keyword[Object.keys(keyword)[0]] );
}

function exactMatchToList(drivers, keyword) {
  return exactMatch(drivers, keyword).map(d => d.name) ;
}
