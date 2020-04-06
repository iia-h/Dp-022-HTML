let flashDriveSize = prompt( 'Enter the capacity of your flash drive in GB.' );
let fileSizeMb = 820;
let mbInGb = 1024;
let numberOfFiles = flashDriveSize * mbInGb / fileSizeMb;
alert('Number of files - ' + Math.floor( numberOfFiles ));