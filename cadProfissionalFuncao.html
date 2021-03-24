<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciamento de Profissional com Função</title>
</head>
<body>
    <?php
        ini_set('display_errors', true);
        require_once('Controller/controllerProfissional_funcao.php');
    ?>

    <form method="post">
        <label for="profissional">Profissional</label>
        <select name="profissional_id">
            <?php  
                foreach( $profissionais as $prof ){
                    if( $prof_fun ){
                        if( $prof_func->profissional_id == $prof['profissional_id'] ){
                            echo "<option value='{$prof['profissional_id']}' selected=true >{$prof['nome']}</option>";
                        } else {
                            echo "<option value='{$prof['profissional_id']}' >{$prof['nome']}</option>";
                        }
                    }
                }
            ?>
        </select>

        <label for="funcao">Função</label>
        <select name="funcao_id">
            <?php
                foreach( $funcoes as $fun ){
                    if( $prof_fun ){
                        if( $prof_func->funcao_id == $fun['funcao_id'] ){
                            echo "<option value='{$fun['funcao_id']}' selected=true >{$fun['nome_funcao']}</option>";
                        } else {
                            echo "<option value='{$fun['funcao_id']}' >{$fun['nome_funcao']}</option>";
                        }
                    }
                }
            ?>
        </select>

        <button name="acao" value="cadastrar">Cadastrar</button>
        <button name="acao" value="alterar">Alterar</button>
    </form>

    <?php
        if( $prof_funcs ){
            echo "<table>
                <thead>
                    <tr>
                        <th>Profissional</th>
                        <th>Função</th>
                        <th>Ação</th>
                    </tr>
                </thead>
            ";
            echo "<tbody>";
                foreach($prof_funcs as $pro){
                    $profunc = new Profissional_funcao($pro['profissional_id']);
                    $profFuncao = new Profissional_funcao($pro['funcao_id']);
                    echo "<tr>
                            <td>{$profunc->profissional_id->nome}</td>
                            <td>{$profFuncao->funcao_id->nome_funcao}</td>
                            <td>
                                <form method='POST'>
                                </form>
                            </td>
                        </tr>";
                }
            echo "</tbody>";
            echo "</table>";
        }
    ?>
</body>
</html>