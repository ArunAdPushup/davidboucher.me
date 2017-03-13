#Before You install

You must first edit the manifest.json file to include the websites you want to capture bids from.

"externally_connectable": {
  "matches": ["*://*.*****.*****/*"],
  "ids": ["*"]
}

Simply put your URL in the above matches entry within the manifest.json file. Then load the unpacked extension.
