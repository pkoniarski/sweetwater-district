// ════════════════════════════════════════════════════════════════════
//  SWEETWATER DISTRICT — UNIT MANIFEST
//
//  This file is the master list of units on the district site.
//  When you upload a new unit folder to units/, add ONE LINE here
//  and re-upload this file. The district homepage counter, unit
//  directory, Find-a-Unit, and map all read from this list.
//
//  FIELDS:
//    type:    'pack' | 'troop' | 'crew' | 'ship'
//    num:     display name, e.g. 'Troop 800'
//    city:    city or neighborhood
//    school:  charter org / meeting place (searchable in directory)
//    day:     meeting day,  time: meeting time
//    members: approximate youth count (feeds the homepage counters)
//    website: true if their site is uploaded and live
//    folder:  the folder name under units/  (lowercase-hyphens)
//    lat/lng: map pin position as PERCENT of map width/height (0-100)
//
//  EXAMPLE — copy a line, edit, done:
//  { type:'pack',  num:'Pack 755',  city:'Chula Vista', school:'Heritage Elementary',   day:'Mondays',  time:'6:30 PM', members:34, website:true,  folder:'pack-755',  lat:55, lng:40 },
// ════════════════════════════════════════════════════════════════════

const UNIT_MANIFEST = [

  // ── EDIT THESE to match the two units you uploaded ──────────────
  { type:'troop', num:'Troop 800', city:'Chula Vista', school:'Heritage Elementary', day:'Mondays', time:'7:00 PM', members:28, website:true, folder:'troop-800', lat:50, lng:45 },
  { type:'pack',  num:'Pack 755',  city:'Chula Vista', school:'Heritage Elementary', day:'Tuesdays', time:'6:30 PM', members:34, website:true, folder:'pack-755',  lat:58, lng:52 },

];
