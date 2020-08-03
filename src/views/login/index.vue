<template>
    <div class="login-container">
        <el-row style="display: flex;justify-content: center;">
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="wrap-login">
                <el-form
                        ref="loginForm"
                        :model="loginForm"
                        :rules="loginRules"
                        auto-complete="off"
                        class="login-form"
                        label-position="left"
                >
                    <div class="header-login">
                        <div class="header-login-inner">
                            <img src="../../assets/logo.png" style="width: 40px"/>
                            <div>OTC总后台 </div>
                        </div>
                    </div>
                    <div class="text-title">账号密码登录</div>
                    <el-form-item style="margin-top: 10px;" prop="admin_name" class="login-form-admin">
                        <el-input
                                v-model.trim="loginForm.admin_name"
                                placeholder="请输入用户名"
                                type="text"
                                prefix-icon="el-icon-user"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="admin_passwd" class="login-form-pass">
                        <el-input
                                :key="passwordType"
                                v-model.trim="loginForm.admin_passwd"
                                ref="password"
                                :type="passwordType"
                                placeholder="请输入密码"
                                prefix-icon="el-icon-lock"
                                @keyup.enter.native="handleLogin"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="admin_captcha" class="login-form-admin">
                        <el-input
                                v-model.trim="loginForm.admin_captcha"
                                auto-complete="off"
                                type="text"
                                placeholder="请输入谷歌验证码"
                                @keyup.enter.native="handleLogin"
                        ></el-input>
                    </el-form-item>
                    <el-button :loading="loading" class="login-btn" type="primary" @click="handleLogin">登录</el-button>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { isPassword } from "@/utils/validate.ts";
const validateUserName = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
if (""=== value) {
    callback(new Error("用户名不能为空"));
} else {
    callback(undefined);
}
};
const validateCaptcha = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
    if ("" === value) {
        callback(new Error("验证码不能为空"));
    } else {
        callback(undefined);
    }
};
const validatePassword = (rule: any, value: any, callback: (arg0: Error | undefined) => void) => {
    if (!isPassword(value)) {
        callback(new Error("密码不能少于6位"));
    } else {
        callback(undefined);
    }
};
@Component({
    components:{
    },
    directives:{
         focus: {
            inserted(el) {
                (el.querySelector("input") as HTMLInputElement).focus();
            },
        },
    }
})
export default class Login extends Vue {
            loginForm =  {
                admin_name: "",
                admin_passwd: "",
                admin_captcha:'',
            }
            loginRules = {
                admin_captcha: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: validateCaptcha,
                    },
                ],
                admin_name: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: validateUserName,
                    },
                ],
                admin_passwd: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: validatePassword,
                    },
                ],
            }
            loading=false
            passwordType='password'
            redirect = undefined
            showPwd() {
                this.passwordType === "password"
                    ? (this.passwordType = "")
                    : (this.passwordType = "password");
                this.$nextTick(() => {
                    // github https://github.com/vuejs/vue-class-component/issues/94
                    (this.$refs.password as HTMLElement).focus();
                });
            }
            handleLogin() {
                (this.$refs.loginForm as HTMLFormElement).validate(async (valid: boolean) => {
                    if (valid) {
                        this.loading = true;
                        console.log(this.loginForm);
                        await this.$store.dispatch("user/login", this.loginForm);
                        const routerPath =
                            this.redirect === "/404" || this.redirect === "/401"
                                ? "/overview"
                                : this.redirect?this.redirect:'/overview';
                        console.log('routerPath',routerPath,this.redirect)
                        this.$router.push({ path: routerPath }).catch((error) => {});
                        this.loading = false;
                    } else {
                        return false;
                    }
                });
            }
}
</script>

<style lang="scss">
    .login-container {
        height: 100vh;
        min-height: 600px;
        /*background: url("~@/assets/login_images/background.jpg") center center fixed*/
        /*  no-repeat;*/
        /*background-size: cover;*/
        .login-form {
            max-width: 400px;
            width: 80%;
            margin-top: 20%;
        }
        .el-input__inner {
            height: 40px;
            line-height: 40px;
        }
        .text-title {
            font-size: 16px;
        }
        .header-login-inner{
            img{
                margin-right: 15px;
            }
            display: flex;
            align-items: center;
        }
        .header-login {
            width: 100%;
            font-weight: 650;
            font-style: normal;
            font-size: 20px;
            color: #000000;
            display: flex;
            align-items: center;
            margin-bottom: 50px;
            justify-content: center;
        }
        .wrap-login {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .login-btn {
            width: 100%;
            height: 40px;
        }
    }
</style>
