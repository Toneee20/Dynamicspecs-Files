// PAGE NAVIGATION
function showPage(p){
  document.querySelectorAll('.page').forEach(pg=>pg.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  var el=document.getElementById('page-'+p);
  if(el){el.classList.add('active');window.scrollTo(0,0);}
  var nl=document.getElementById('nl-'+p);
  if(nl){nl.classList.add('active');}
}

// MOBILE NAV
function openMob(){document.getElementById('mobNav').classList.add('open');}
function closeMob(){document.getElementById('mobNav').classList.remove('open');}

// MODAL
function openModal(){document.getElementById('modalOv').classList.add('open');}
function closeModal(){document.getElementById('modalOv').classList.remove('open');}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});

// FORM SUBMIT
function submitForm(){
  var fname = document.getElementById('bk_fname');
  var sname = document.getElementById('bk_sname');
  var phone = document.getElementById('bk_phone');
  var email = document.getElementById('bk_email');
  var service = document.getElementById('bk_service');
  var date   = document.getElementById('bk_date');
  var msg    = document.getElementById('bk_msg');

  if(!fname.value.trim()){showToast('Please enter your first name.');return;}
  if(!phone.value.trim()){showToast('Please enter your phone number.');return;}

  var subject = 'New Booking - Dynamicspecs Optometrists';
  var body = 'BOOKING REQUEST\n================\n'
    + 'First Name: ' + fname.value + '\n'
    + 'Surname: '    + sname.value + '\n'
    + 'Phone: '      + phone.value + '\n'
    + 'Email: '      + email.value + '\n'
    + 'Service: '    + service.value + '\n'
    + 'Date: '       + date.value  + '\n'
    + 'Message: '    + msg.value   + '\n\n'
    + 'Sent from Dynamicspecs website booking form.';

  window.open('mailto:kemmachipi@gmail.com?subject='
    + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body));

  showToast('Booking request sent to Dynamicspecs! We will confirm within 24 hours.');
  fname.value=''; sname.value=''; phone.value='';
  email.value=''; service.selectedIndex=0;
  date.value=''; msg.value='';
  setTimeout(closeModal, 2000);
}

// TOAST
function showToast(msg){
  var t=document.getElementById('toast');
  t.textContent=msg;
  t.classList.remove('show');
  void t.offsetWidth; // force reflow
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer=setTimeout(function(){t.classList.remove('show');},4000);
}

// STICKY BOOK
window.addEventListener('scroll',function(){
  var sb=document.getElementById('stickyBook');
  if(window.scrollY>300){sb.classList.add('show');}
  else{sb.classList.remove('show');}
});

// CHATBOT
function toggleChat(){
  var cb=document.getElementById('chatBox');
  cb.classList.toggle('open');
}

var chatReplies={
  book:'Great! We would love to book you in. Click below to complete your booking form.',
  prices:'Our packages start from R1,400 for a single vision package (includes eye test, lenses and frame). Bifocal from R1,900 and Multifocal from R2,400. Easy payment plans available.',
  hours:'Our trading hours are: Monday to Friday 09:00 AM - 5:00 PM, Saturday 10:00 AM - 2:00 PM. Closed Sundays and Public Holidays.',
  brands:'We stock FUBU, Felicia, D&G, Prada, Gucci, Burberry and more. Visit us in store to see the full collection!',
  location:'We are located at 1st Floor, Shop 50, Vaal Gate (Opposite the ATMs), Vanderbijlpark CBD. Come visit us!'
};

function cReply(key){
  var body=document.getElementById('chatBody');
  var msg=document.createElement('div');
  msg.className='bubble';
  msg.style.cssText='background:var(--blue2);color:#fff;margin-left:auto;border-radius:12px 12px 2px 12px;';
  msg.textContent={book:'Book an eye test',prices:'Packages & prices',hours:'Trading hours',brands:'What brands do you stock?',location:'Where are you located?'}[key]||'';
  body.appendChild(msg);
  setTimeout(function(){
    var reply=document.createElement('div');
    reply.className='bubble';
    reply.textContent=chatReplies[key]||'Thank you! Please call us on 069 842 0548 for more information.';
    body.appendChild(reply);
    if(key==='book'){
      var btn=document.createElement('button');
      btn.className='c-opt';
      btn.textContent='Open Booking Form';
      btn.onclick=function(){openModal();};
      body.appendChild(btn);
    }
    body.scrollTop=body.scrollHeight;
  },600);
  body.scrollTop=body.scrollHeight;
}

function submitContactForm(){
  var fields = document.querySelectorAll('#page-contact .contact-form-wrap input, #page-contact .contact-form-wrap select, #page-contact .contact-form-wrap textarea');
  var labels = ['First Name','Surname','Phone','Email','Service','Message'];
  var bodyParts = 'ENQUIRY FROM DYNAMICSPECS WEBSITE\n================\n';
  var hasValue = false;
  fields.forEach(function(f,i){
    if(f.value && f.value.trim()){
      bodyParts += (labels[i]||'Field') + ': ' + f.value.trim() + '\n';
      hasValue = true;
    }
  });
  if(!hasValue){showToast('Please fill in your details before sending.');return;}
  bodyParts += '\nSent from Dynamicspecs Contact Page.';
  var link = document.createElement('a');
  link.href = 'mailto:kemmachipi@gmail.com?subject=' + encodeURIComponent('New Enquiry - Dynamicspecs Optometrists') + '&body=' + encodeURIComponent(bodyParts);
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Message sent! We will get back to you shortly.');
  setTimeout(function(){
    fields.forEach(function(f){f.value='';});
  },1000);
}
function sendChat(){
  var inp=document.getElementById('chatInput');
  var val=inp.value.trim();
  if(!val)return;
  var body=document.getElementById('chatBody');
  var msg=document.createElement('div');
  msg.className='bubble';
  msg.style.cssText='background:var(--blue2);color:#fff;margin-left:auto;border-radius:12px 12px 2px 12px;';
  msg.textContent=val;
  body.appendChild(msg);
  inp.value='';
  setTimeout(function(){
    var reply=document.createElement('div');
    reply.className='bubble';
    reply.textContent='Thank you for your message! For immediate assistance, please call us on 069 842 0548 or WhatsApp us.';
    body.appendChild(reply);
    body.scrollTop=body.scrollHeight;
  },700);
  body.scrollTop=body.scrollHeight;
}