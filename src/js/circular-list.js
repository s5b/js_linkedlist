'use strict';

var S5B = S5B || {};

S5B.node = function(p_data) {

    var old_next_node;
    var old_previous_node;

    var node = {
        get_data: function () {
            return p_data;
        },
        get_next: function () {
            return next_node;
        },
        get_previous: function () {
            return previous_node;
        },
        append: function (p_node) {
            old_next_node = next_node;
            old_previous_node = p_node.get_previous();

            next_node = p_node;
            p_node.set_previous(node);

            old_next_node.set_previous(old_previous_node);
            old_previous_node.set_next(old_next_node);
        },
        insert: function (p_node) {
            old_previous_node = previous_node;
            old_next_node = p_node.get_next();

            previous_node = p_node;
            p_node.set_next(node);

            old_previous_node.set_next(old_next_node);
            old_next_node.set_previous(old_previous_node);
        },
        set_next: function (p_node) {
            next_node = p_node;
        },
        set_previous: function (p_node) {
            previous_node = p_node;
        },
        unlink: function () {
            previous_node.set_next(next_node);
            next_node.set_previous(previous_node);

            previous_node = node;
            next_node = node;

            return node;
        }
    };

    var next_node = node;
    var previous_node = node;

    return node;
};
