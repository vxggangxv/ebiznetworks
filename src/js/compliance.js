$(document).ready(function() {
  /*익명 기능*/
  $("#noname, #noname + label").on("click", function() {
    var $np = $("#noname").prev();
    var isCheked = $("#noname").prop("checked");
    //console.log(isCheked);
    $np.prop("disabled", isCheked);
    if( $np.prop("disabled") ) {
      $np.val("");
    }
  });
  /* 이메일 선택 기능 */
  $("#m_select").on("click", function() {
    var thTxt = $(this).val();
    console.log(thTxt);
    if (thTxt == "직접입력") {
      $(this).prev().val("");
    } else {
      $(this).prev().val(thTxt);
    }
  });
  /*파일박스 꾸미기*/
  var fileTarget = $('.filebox .upload-hidden'); 
  fileTarget.on('change', function(){ // 값이 변경되면 
    if(window.FileReader){ // modern browser 
      var filename = $(this)[0].files[0].name; 
    } else { // old IE 
      var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
    } 
    // 추출한 파일명 삽입 
    $(this).siblings('.upload-name').val(filename);
    $(this).siblings('.upload-name').css("color","#666");
  });
});