"use strict";
/*
    License: OPL-1
    author: farooq@aarsol.com
*/
odoo.define('gabosoft_pos_ticket.screens', function (require) {

    var models = require('point_of_sale.models');
    var screens = require('point_of_sale.screens');
    var core = require('web.core');
    var utils = require('web.utils');
    var round_pr = utils.round_precision;
    var _t = core._t;
    var gui = require('point_of_sale.gui');
    var qweb = core.qweb;


    screens.ReceiptScreenWidget.include({
        renderElement: function () {
            var self = this;
            this._super();
            this.$('.back_order').click(function () {
                var order = self.pos.get_order();
                if (order) {
                    self.pos.gui.show_screen('products');
                }
            });
        },
        show: function () {
            this._super();
            try {
                //$("#barcode_img").barcode(this.pos.get('selectedOrder').ean13,"ean13");
                var hoy = new Date();
                var fechalimite1EnMilisegundos = 1000 * 60 * 60 * 24 * 1;
                var fechalimite2EnMilisegundos = 1000 * 60 * 60 * 24 * 9;
                var fechalimite3EnMilisegundos = 1000 * 60 * 60 * 24 * 10;
                var fechalimite4EnMilisegundos = 1000 * 60 * 60 * 24 * 31;
                var suma1 = hoy.getTime() + fechalimite1EnMilisegundos;
                var suma2 = hoy.getTime() + fechalimite2EnMilisegundos;
                var suma3 = hoy.getTime() + fechalimite3EnMilisegundos;
                var suma4 = hoy.getTime() + fechalimite4EnMilisegundos;  //getTime devuelve milisegundos de esa fecha
                var fechalimite1 = new Date(suma1);
                var fechalimite2 = new Date(suma2);
                var fechalimite3 = new Date(suma3);
                var fechalimite4 = new Date(suma4);
                var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
                document.getElementById("caducidad_coupon1").innerHTML = fechalimite1.toLocaleDateString("es-CO", options);
                document.getElementById("caducidad_coupon2").innerHTML = fechalimite2.toLocaleDateString("es-CO", options);
                document.getElementById("caducidad_coupon3").innerHTML = fechalimite3.toLocaleDateString("es-CO", options);
                document.getElementById("caducidad_coupon4").innerHTML = fechalimite4.toLocaleDateString("es-CO", options);
                console.log("la fecha 1 seria .."+fechalimite1);
                console.log("la fecha 2 seria .."+fechalimite2);
                console.log("la fecha 3 seria .."+fechalimite3);
                console.log("la fecha 4 seria .."+fechalimite4);
            } catch (error) {
            }
        },

    });



});
