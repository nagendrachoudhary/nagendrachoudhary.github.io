export const handleClick = () =>{
    window.open("./NagendraChoudhary_resume.pdf")
    const url = "./NagendraChoudhary_resume.pdf";
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Nagendra_Choudhary_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }