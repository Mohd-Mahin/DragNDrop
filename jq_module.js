$(function () {
    const $dropContainer = $('#drop_container');
    const $dialog = $('#dialog');
    const $posTopBottom = $('#draggable_top').position();
    const $posLeft = $('#draggable_left').position();
    let draggableObject = {
        containment: "body",
        cursor: "crosshair",
        revert: "invalid",
        handle: 'h4',
        cursorAt: { top: 4 }
    };
    
    $('#draggable_top, #draggable_left, #draggable_right, #draggable_bottom').draggable(draggableObject);    
    
    $('#draggable_top, #draggable_bottom').draggable({
        containment: [-633, 0, 633, 562],
    });

    $($dropContainer).droppable({
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        tolerance: "fit",
        drop: (s, ui) => {
            $($dialog).dialog("open");
        },
    });

    $($dialog).dialog({
        autoOpen: false,
        draggable: false,
        resizable: false,
        close: () => {           
            $("#draggable_top, #draggable_bottom").animate({
                left: $posTopBottom.left,
                top: 0,
            });
            
            $("#draggable_left, #draggable_right").animate({
                left: $posLeft.left,
                top: 235,
            });      
        },             
    });
});