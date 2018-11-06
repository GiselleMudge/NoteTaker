var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $newNoteBtn = $(".new-note");
var $noteList = $(".list-container .list-group");


// Delete the clicked note
var handleNoteDelete = function(event) {
  // Prevent the click listener for the list from being called when the button inside of it is clicked
  event.stopPropagation();

  var note = $(this)
    .parents(".list-group-item")
    .data();

  // Delete the note with the id of `note.id`
  // Render the active note
  $.ajax({
    url: "/api/characters/" + note.id,
    method: "DELETE"
  }).then(function() {
    location.reload();
  });
};

// Render the list of note titles
var renderNoteList = function(notes) {
  $noteList.empty();

  var noteListItems = [];

  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];

    var $li = $("<li class='list-group-item'>").data(note);
    var $titleDiv = $("<div>");
    var $titleSpan = $("<span class='font-weight-bold'>").text(note.title);
    var $delBtn = $(
      "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
    );

    var $noteP = $("<p class='mt-2'>").text(note.text);

    $titleDiv.append($titleSpan, $delBtn);

    $li.append($titleDiv, $noteP);
    noteListItems.push($li);
  }

  $noteList.append(noteListItems);
};

// Get notes from the db and render them to the sidebar
var getAndRenderNotes = function() {
  $.ajax({
    url: "/api/characters",
    method: "GET"
  }).then(function(data) {
    renderNoteList(data);
  });
};

$noteList.on("click", ".delete-note", handleNoteDelete);

// Gets and renders the initial list of notes
getAndRenderNotes();
