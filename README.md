# camp-available
Checks camp reservations for availability

## Contributions
Many thanks to [Chance Harmon](https://github.com/ChanceHarmon) who provided the [sample code](https://github.com/ChanceHarmon/pph-cheatsheet/tree/master/original-demo) for this project.

### URL Search Info

https://washington.goingtocamp.com/create-booking/results?resourceLocationId=-2147483552&mapId=-2147483354&searchTabGroupId=0&bookingCategoryId=0&startDate=2021-07-26&endDate=2021-07-27&nights=1&isReserving=true&equipmentId=-32768&subEquipmentId=-32768&partySize=4&searchTime=2021-03-25T09:18:29.744

- resourceLocationID = campground
- mapID = campground map
- searchTabGroupID = ??
- bookingCategoryID = Tent/Van/Camper (0=Tent)
- startDate = arrival date (YYYY-MM-DD)
- endDate = departure date (YYYY-MM-DD)
- nights = quantity of nights
- isReserving = ? (possibly *true* if available)
- equipmentID = ?
- subEquipmentID = ?
- partySize = number of campers
- searchTime = time stamp of search request (YYYY-MM-DDTHH:MM:SS.sss)

