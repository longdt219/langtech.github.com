$(function() {
  $('#documentTitle').remove();
  $('#documentMetadata').remove();
  
  var content = {
    main: [
      "Welcome to the Aikuma main screen. This is the first screen you will see after the introduction.",
      "",
      "The three recordings you are seen are your recordings newsfeed – akin to the Twitter or Facebook newsfeed.",
      "At the top is the navigation: recording, the feed (the page you are on).",
      "",
      "There are four tabs that define what is shown below:",
      "Latest and A-Z show all recordings, in a specific order.",
      "To Translate and To Transcribe show a selection of recordings that have not yet gone through the Aikuma workflow.",
      "Either shows where work still needs to be done.",
      "",
      "Next: Click the record button to do a recording or one of the tabs to see what they are about."
    ],
    main_sync_state_shown: [
      "After pulling down the list of recordings, you see the current synchronisation state code.",
      "What does this code mean?",
      "Recordings are synced between phones.",
      "If two codes are the same, they contain exactly the same data, and are in sync.",
      "",
      "Next: Select a recording or use the navigation at the top."
    ],
    record: [
      "This is the recording screen – click the record button at the bottom.",
      "(The schematic to tell speakers how to record is not yet included)"
    ],
    recording: [
      "This is the recording screen – you are currently recording a comment. Don't worry, we aren't recording you right now, but this is what it would look.",
      "Currently you have recorded 12 seconds worth of material. The meter indicates that you are speaking a bit loudly.",
      "",
      "Next: Click stop to stop recording."
    ],
    playing: [
      "The playing screen is where you simply listen to an original, add a translation, respeak the original, or make a few comments.",
      "",
      "Topmost is the duration, title and speakers on this original recording.",
      "Then there is the timeline, indicating where you are in listening. You are currently at the beginning.",
      "Then there are several comments/translations/respeakings.",
      "",
      "Next: Click either the big recording button to add your own comment/transation etc. or Susie to listen to her comment (recommended)."
    ],
    playing_comment_selected: [
      "You've clicked on Susie.",
      "",
      "The original interview was playing, but now, at the red lines (in the timeline) the replay of the original briefly stops and you hear Susie's comments.",
      "",
      "Next: Go back to listening to the original."
    ],
    playing_recording_comment: [
      "You've clicked on the plus to add your own comment.",
      "",
      "The first red line on the timeline marks the first position you've recorded.",
      "You are now recording a second comment, at 3:14.",
      "The second comment is 12 seconds long.",
      "",
      "Next: Click on the stop button to finish commenting on this original."
    ],
    playing_comment_ok: [
      "You've clicked the stop button.",
      "",
      "Your comment is 0:32 long.",
      "",
      "You are now asked to decide whether you want to discard or keep this comment.",
      "",
      "Next: Click on the X to discard, or on the check to add metadata to your comment (recommended)."
    ],
    metadata: [
      "This is the metadata screen where you enter pertinent information regarding your recording.",
      "",
      "Topmost you can review your recording.",
      "Then, you can add speakers you were recording.",
      "The speaker selection defines what languages can be selected for this recording, just below.",
      "Usually, there will be only 1 language, already preselected.",
      "This is followed by an optional description (default is date and time).",
      "",
      "Invisible to you there is more automatically collected information, ie. time, date, GPS location.",
      "",
      "Next: Click either the X, or the checkmark next to it (recommended), or the '+' to add another speaker."
    ],
    menu: [
      "This is the menu (it will be shown over whatever content you've clicked it on).",
      "Choose either search, speakers, or settings."
    ],
    speakers: [
      "This shows all the available speakers.",
      "",
      "Next: Add a new speaker, select Oliver to show all of Oliver's recordings or Steven or Florian to go back to adding metadata."
    ],
    speaker: [
      "These are recordings where Ollie spoke.",
      "",
      "Next: Go back or navigate using the top action bar."
    ],
    add_speaker: [
      "This is the page to add a new speaker.",
      "",
      "First, record a good picture of the speaker. Then their name, followed by the languages they speak.",
      "The default languages are already there, easy to select.",
      "These languages will be used to help setting the language of a recording this speaker is recorded on.",
      "",
      "Next: Click 'Add Language' or go back via X or checkmark."
    ],
    add_language_add_speaker: [
      "This screen lets you select a language. There are the recently used languages, but also a search function to search for any of the 7'105 languages.",
      "",
      "Next: Select a language to go back (since this is just a wireframe, it does not actually select a language. Sorry!)."
    ],
    metadata_share: [
      "This screen verifies that you really want to share the recording with everybody.",
      "If yes, the recording will be uploaded at the earliest convenience (via wireless or mobile data).",
      "",
      "Next: Click either the X to abort, or the checkmark again to confirm (recommended)."
    ],
    search_result: [
      "This is the page where you search for recordings.",
      "Previously, you've looked for 'Anything in Usarufa or English shorter than 2 hours but longer than 2 minutes' and these results are displayed.",
      "",
      "Next: Click on the first recording or the big plus to add another search."
    ],
    new_search: [
      "This is the screen where you tell Aikuma what recordings you'd like to find.",
      "It shows you the previous searches.",
      "",
      "You can tell it what types of recordings you are looking for (you've chosen 'Reports' and 'Dialogues') and in what language(s) they should be. You've selected Usarufa (code USA).",
      "You can also define how long they should be.",
      "",
      "Next: Click the X or the checkmark – the checkmark would then search, but in our mock-up you just go back to the searches tab. Sorry."
    ],
    settings: [
      "This is the settings page where you handle advanced settings.",
      "",
      "First you can set a default language. You've chosen Usarufa. This will result in your recordings having Usarufa preselected in their metadata.",
      "Sharing Uses 3G tells Aikuma whether it can use your data connection to send and receive recordings.",
      "Local network is about using a local network, eg. a wireless network (a router, if that helps) you brought with you to a village over which recordings are exchanged.",
      "",
      "Next: Go to the main tab again, or the searches tab."
    ]
  }
  
  $.each(content, function(key, text) {
    $('#' + key + '_page .ImageContainer').append('<p class="description">' + text.join("<br/>") + '</p>')
  });
});