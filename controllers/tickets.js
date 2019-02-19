

function newTicket(req, res) {
    res.render('tickets/new'), { title: 'Add Ticket', idNum: req.params.id };
  };