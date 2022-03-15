class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
    this.message = createElement("h1")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html(" Quiz Game");
    this.title.position(290, 0)
    

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    //this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question 1: What starts and ends with the letter ‘E’, but has only one letter? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(50, 60);
    this.option1.html("1: Everyone " );
    this.option1.position(250, 120);
    this.option2.html("2: Envelope" );
    this.option2.position(450, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(250, 160);
    this.option4.html("4: Example" );
    this.option4.position(450, 160);

    this.input1.position(350, 250);
    this.input2.position(350, 300);
    this.button.position(400, 350);

    this.button.mousePressed(()=>{
      
      this.message.html("Thank You, Your Answer Has Been Submitted!!!");
       this.message.position(100, 150);
       

       this.question.hide()
       this.title.hide()
       this.option1.hide()
       this.option2.hide()
       this.option3.hide()
       this.option4.hide()
       this.input1.hide()
       this.input2.hide()
       this.button.hide()
       
       
      

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position();

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);


    });
  }
}
