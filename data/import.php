<?php
/**
 * This imports the data from the tsv file
 * To run locally, head to localhost:1234/data/import.php
 */

$debug = false;


$staff = [];
$staffIndex = 0;
$sabbaticalIndex = 0;


$sabbaticalDataFile = file_get_contents('sabbaticals.tsv');
$rows = explode("\n", $sabbaticalDataFile);


// Remove first row with spreadsheet table headings.
array_shift($rows);


foreach ($rows as $index => $row) {
  $staffData = explode("\t", $row);

  $firstName = first($staffData[1], ' ');
  $lastName = last($staffData[1], ' ');

  $employeeIndex = staffExists($staff, $lastName);

  if (!$employeeIndex) {
    $employee = (object) [];

    $employee->id = $staffIndex;
    $employee->first_name = first($staffData[1], ' ');
    $employee->last_name = last($staffData[1], ' ');
    $employee->title = NULL;
    $employee->department = NULL;
    $employee->start_date = NULL;
    $employee->end_date = NULL;
  }
  else {
    $employee = $staff[$employeeIndex];
  }

  $employee->sabbaticals[] = setSabbaticalData($staffData);


  if (!$employeeIndex) {
    $staff[] = $employee;

    $staffIndex++;
  }
}


$response = json_encode($staff);


if ($debug) {
  // Return JSON response for viewing in browser:
  // Set up a quick server via terminal in project directory using: php -S localhost:1234
  // Then head to http://localhost:1234/data/import.php in browser.
  header('Content-Type: application/json');
  echo $response;
}
else {
  $fileLocation =  __DIR__.'/../assets/js/sabbaticals.json';

  // Export JSON data to a file.
  file_put_contents($fileLocation, $response);
}




// Functions

function first($data, $delimeter = ',') {
  $array = explode($delimeter, $data);

  reset($array);

  return $array[key($array)];
}


function last($data, $delimeter = ',') {
  $array = explode($delimeter, $data);

  end($array);

  return $array[key($array)];
}


function getValue($data) {
  return isset($data) && !empty($data) ? $data : NULL;
}


function setSabbaticalData($data) {
  $sabbatical = (object) [];

  $sabbatical->date = $data[7];
  $sabbatical->location = [
    'latitude' => $data[3],
    'longitude' => $data[4],
    'city' => first($data[2]),
    'country' => last($data[2]),
  ];
  $sabbatical->organization = [
    'title' => $data[5],
    'website' => $data[8],
  ];
  $sabbatical->contact = [
    'name' => $data[6],
    'email' => $data[7],
  ];
  $sabbatical->description = $data[10];

  return $sabbatical;
}


function staffExists(array $staff, $lastName) {
  foreach ($staff as $index => $employee) {
    if ($employee->last_name === $lastName) {
      return $index;
    }
  }

  return FALSE;
}
