sap.ui.define([], function() {
    "use-strict";
    return {
        formatName: function(sFirstName, sLastName) {

            // var singleLastName = [ ];
            // var finalLastName = " ";

    //         for(var i = 0; i < sLastName.length; i++) {
    //             while(!sLastName.contains("-")) {
    //                 singleLastName[i] = sLastName[i];
    //                 finalLastName = singleLastName.join([separator = ',']);  
    //             }
    //  }

            return sFirstName[0] + ". " + sLastName;
        }
    }
})