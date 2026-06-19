(function(){
  if(window.__crSampleInit)return; window.__crSampleInit=true;
  var FORM=`<form method="post" fs-formsubmit-redirecturl="/thankyou/locked4kids-carton" class="form-cta-sample" fs-formsubmit-element="form" name="wf-form-cta-form-sample" fs-formsubmit-redirect="true" data-name="cta-form-sample" action="https://submit-form.com/XyKH93rA" id="wf-form-cta-form-sample" data-wf-page-id="630dcd067067ec329ba3d414" data-wf-element-id="a9cdec0e-41f7-5e7f-ca18-59418494fdd5"><div class="form-cta-sample-steplabel">Provide your name and e-mail to get contacted for delivery details</div><input class="form-field-input w-input" maxlength="256" name="First-name" data-name="First name" placeholder="First name" type="text" id="First-name-2" required=""/><input class="form-field-input w-input" maxlength="256" name="Last-name" data-name="Last name" placeholder="Last name" type="text" id="Last-name-2" required=""/><input class="form-field-input w-input" maxlength="256" name="Your-Email-3" data-name="Your Email 3" pattern="((?!@(gmail.com|hotmail.com|outlook.com|yahoo.com|yahoo.net|gmx.com|web.de|proximus.be|telenet.be|hotmail.be|ziggo.nl|planet.nl|orange.fr|web.de|t-online.de|hotmail.co.uk|yahoo.co.uk|icloud.com|360.com|company.com|companyy.com|business.com|google.com|aol.com|aquaflow.com|ymail.com|qualys.com|gm1ail.com|ail.com|seznam.cz|gap.com|yahhoo.com|domain.com|DOMAIN.com|live.con|comp.com|aquaflo.com|163.com|comay.com|energizer.com|yhoo.com|hootmail.com|live.com)).)*" placeholder="Your email" title="Please use a business email" type="email" id="Your-Email-3" required=""/><div class="w-richtext"><div class="w-embed"><input type="hidden" name="cta_samplekind" value="Medical Device Wallet"></div></div><div class="w-embed"><input
    type="checkbox"
    name="field-bytheway"
    style="display:none"
    tabindex="-1"
    autocomplete="off"
  /></div><div class="umts-wrapper"><input class="hidden-utm-input source w-input" maxlength="256" name="UTM_Source" data-name="UTM_Source" placeholder="Example Text" type="text" id="UTM_Source"/><input class="hidden-utm-input medium w-input" maxlength="256" name="UTM_Medium" data-name="UTM_Medium" placeholder="Example Text" type="text" id="UTM_Medium"/><input class="hidden-utm-input campaign w-input" maxlength="256" name="UTM_Campaign" data-name="UTM_Campaign" placeholder="Example Text" type="text" id="UTM_Campaign"/></div><input type="submit" data-wait="Please wait..." class="button-full w-button" value="Request the free sample"/><div class="sample-disclaimer">All fields are required. Ecobliss will always evaluate a request and reserves the right to reject a request.</div></form>`;
  var ov,built=false;
  function fillUTM(root){try{var p=new URLSearchParams(location.search);[['source','utm_source'],['medium','utm_medium'],['campaign','utm_campaign']].forEach(function(m){var v=p.get(m[1]);if(v)root.querySelectorAll('.hidden-utm-input.'+m[0]).forEach(function(el){el.value=v;});});}catch(e){}}
  function build(){
    ov=document.createElement('div');
    ov.id='cr-sample-ov';
    ov.style.cssText='position:fixed;inset:0;background:rgba(8,42,48,.65);z-index:2147483000;display:none;align-items:flex-start;justify-content:center;padding:40px 16px;overflow:auto;';
    var box=document.createElement('div');
    box.style.cssText='background:#fff;max-width:540px;width:100%;border-radius:16px;padding:34px 34px 28px;position:relative;box-shadow:0 24px 70px rgba(0,0,0,.35);margin:auto;font-family:inherit;';
    box.innerHTML='<button type="button" id="cr-sample-x" aria-label="Close" style="position:absolute;top:16px;right:18px;border:0;background:none;font-size:28px;line-height:1;cursor:pointer;color:#08323a;">&times;</button>'
      +'<h3 style="margin:0 0 6px;color:#08323a;font-size:24px;">Get a free Locked4Kids sample</h3>'
      +'<p style="margin:0 0 20px;color:#5a6b6e;font-size:15px;">Leave your name and business email. We will contact you for delivery details. Samples are sent at no cost.</p>'
      +'<div class="cr-sample-wrap">'+FORM
      +'<div class="w-form-done" style="display:none;padding:18px;background:#e7f6ec;border-radius:10px;color:#1c5b34;">Thank you. We have received your request and will be in touch about your free sample.</div>'
      +'<div class="w-form-fail" style="display:none;padding:18px;background:#fdecea;border-radius:10px;color:#9b261b;">Something went wrong. Please try again or email info@ecobliss.com.</div>'
      +'</div>';
    ov.appendChild(box);document.body.appendChild(ov);
    document.getElementById('cr-sample-x').onclick=close;
    ov.addEventListener('click',function(e){if(e.target===ov)close();});
    var f=ov.querySelector('form[action^="https://submit-form.com"]');
    fillUTM(ov);
    if(f){f.addEventListener('submit',function(e){
      e.preventDefault();
      var action=f.getAttribute('action');
      function send(tok){
        var fd=new FormData(f); if(tok)fd.append('_botpoison',tok);
        var body=new URLSearchParams(fd).toString();
        fetch(action,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded','Accept':'application/json'},body:body})
          .then(function(r){if(!r.ok)throw r;return r.json().catch(function(){return{};});})
          .then(function(){f.style.display='none';var d=ov.querySelector('.w-form-done');if(d)d.style.display='block';})
          .catch(function(){var x=ov.querySelector('.w-form-fail');if(x)x.style.display='block';});
      }
      if(window.Botpoison){try{new window.Botpoison({publicKey:'pk_6bd691ee-9ed1-44ea-a701-8249637983c4'}).challenge().then(function(r){send(r.solution);}).catch(function(){send();});}catch(_){send();}}
      else{send();}
    });}
    built=true;
  }
  function open(){if(!built)build();ov.style.display='flex';document.documentElement.style.overflow='hidden';}
  function close(){if(ov){ov.style.display='none';document.documentElement.style.overflow='';}}
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  document.addEventListener('click',function(e){
    var a=e.target.closest('a,button');if(!a)return;
    var href=(a.getAttribute&&a.getAttribute('href'))||'';
    var txt=(a.textContent||'').toLowerCase();
    if(href==='#sample'||/request a free[\s\S]*sample/.test(txt)){e.preventDefault();open();}
  },true);
})();