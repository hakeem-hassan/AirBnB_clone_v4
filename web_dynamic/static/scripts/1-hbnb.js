$(function () {
  const id = {};
  const h4 = $('.amenities h4');
  $('.amenities input[type=checkbox]').css('margin-right', '10px');
  $('.amenities input[type=checkbox]').on('change', function () {
    if (this.checked) id[$(this).attr('data-name')] = $(this).attr('data-id');
    else delete id[$(this).attr('data-name')];
    h4.text(Object.keys(id).join(', '))
      .css({
        height: '16px',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap'
      });
  });
});
