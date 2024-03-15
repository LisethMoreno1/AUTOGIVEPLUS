Feature: Formulario Abierto

    Implementación de un formulario abierto para el registro de beneficiarios.

    Scenario: Registro de un beneficiario a través de un formulario abierto
        Given Que el cliente dessea acceder al enlace del formulario abierto, se le debe proporcionar el link  para el ingreso a dicho
        apartado del aplicatico o atravez del portal de cupones en el icono de ingresos en la parte superior izquierda.
        When El usuario completa el formularios con sus datos debera aparecer un emnsaje de confimacion de "Registro exitoso" y tambien
        debera  recibir un mensaje en su correo electrónico.
        Then Podrá acceder a la información de los beneficios y solicitar cupones.
