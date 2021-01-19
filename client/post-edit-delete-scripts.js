/* *************************
 *** POST JOURNAL ***
************************** */
function postJournal() {
     //console.log('postJournal Function Called')
    let title = document.getElementById('title').value
    let date = document.getElementById('date').value
    let entry = document.getElementById('entry').value
    const accessToken = localStorage.getItem('SessionToken')
    let newEntry = { journal: { title: title, date: date, entry: entry}}

    
    }
    
    
    /* *************************
     *** UPDATE JOURNAL ***
    ************************** */
    function editJournal(postId) {
     console.log('editJournal Function Called')
    }
    
    
    /* *************************
     *** DELETE JOURNAL ***
    ************************** */
    function deleteJournal(postId) {
     console.log('deleteJournal Function Called')
    }